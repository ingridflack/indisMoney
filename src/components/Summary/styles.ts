import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  .highlight-background {
    background-color: var(--green);
    color: #fff;
  }

  @media (max-width: 576px) {
    overflow-x: auto;
    margin: -10rem -1rem 0;
    padding: 0 1rem;

    gap: 1rem;
    grid-template-columns: repeat(3, calc(100% - 3rem));
  }
`
