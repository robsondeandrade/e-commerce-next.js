import React from 'react'
import { SortOrder, sortOptions } from './constants'
import { ISortSelectProps } from './types'
import * as S from './styles'

export const SortSelect = ({ onChange }: ISortSelectProps) => {
    return (
        <S.StyledSelect onChange={(e) => onChange(e.target.value as SortOrder)}>
            {sortOptions.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </S.StyledSelect>
    )
}
