'use client'
import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { getProducts } from '@/services/ProductService/productService'
import { calculateTotalPages } from '@/utils/pagination'
import { INITIAL_PAGE, ITEMS_PER_PAGE, DEFAULT_SEARCH } from '@/components/pagination/constants'
import { CardProduct } from '@/components/CardProduct'
import { CustomPagination } from '../pagination'
import { SearchField } from '../SearchField'
import { LoadingOverlay } from '../Loading/LoadingOverlay'
import { SortSelect } from '../SortSelect'
import { SortOrder } from '../SortSelect/constants'
import { RootStateToast } from '@/stores/toast/types'
import { useDispatch, useSelector } from 'react-redux'
import { ModalToast } from '../Modals/ModalToast'
import { hideToast } from '@/stores/toast'
import { IProducts } from '@/services/ProductService/types'
import * as S from './styles'

export const ListProducts = () => {
    const toast = useSelector((state: RootStateToast) => state.toastData.toastInfo)
    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)
    const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE)
    const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.RELEVANCE)

    const offset = (currentPage - 1) * itemsPerPage
    const search = searchTerm || DEFAULT_SEARCH

    const { data, isLoading } = useQuery(
        ['products', currentPage, itemsPerPage, searchTerm, sortOrder],
        () => getProducts({ search, offset, limit: itemsPerPage, sort: sortOrder }),
        {
            keepPreviousData: true,
        },
    )

    const { primary_results: totalResults, limit } = data?.paging || {}
    const totalPages = calculateTotalPages(totalResults, limit)

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page)
    }, [])

    const handleSelectPerPage = useCallback((value: number) => {
        setItemsPerPage(value)
        setCurrentPage(INITIAL_PAGE)
    }, [])

    const handleSearch = useCallback((term: string) => {
        setSearchTerm(term)
        setCurrentPage(INITIAL_PAGE)
    }, [])

    const handleSortChange = useCallback((selectedSortOrder: SortOrder) => {
        setSortOrder(selectedSortOrder)
    }, [])

    return (
        <S.Container>
            {isLoading && <LoadingOverlay />}
            <S.Title>
                {searchTerm ? `Resultados para "${search}"` : 'Explorando Todas as Ofertas'}
            </S.Title>
            <S.BoxSearch>
                <S.BoxSortSelect>
                    <span>Ordenar por</span>
                    <SortSelect onChange={handleSortChange} />
                </S.BoxSortSelect>

                <SearchField onSearch={handleSearch} />
            </S.BoxSearch>

            {!isLoading && data?.results?.length === 0 ? (
                <S.NoResults>
                    Não foram encontrados produtos para esta busca. Tente palavras-chave diferentes
                    ou ajuste os filtros.
                </S.NoResults>
            ) : (
                <S.Content>
                    {data?.results?.map((product: IProducts) => (
                        <div key={product.id}>
                            <CardProduct product={product} />
                        </div>
                    ))}
                </S.Content>
            )}

            {!isLoading && data?.results.length > 0 && (
                <CustomPagination
                    currentPage={currentPage}
                    selected={itemsPerPage}
                    handlePageChange={handlePageChange}
                    handleSelectPerPage={handleSelectPerPage}
                    totalPages={totalPages}
                />
            )}
            <ModalToast
                color={toast.color}
                message={toast.message}
                isVisible={toast.isVisible}
                setIsVisible={() => dispatch(hideToast())}
            />
        </S.Container>
    )
}
