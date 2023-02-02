import styled from 'styled-components'

export const Theme = styled.ul`
display: flex;
gap: 20px;

li {
    padding: 12px;
    border: 5px solid transparent;

    &.currentTheme {
        border: 5px solid var(--primary-color);
    }
}
`