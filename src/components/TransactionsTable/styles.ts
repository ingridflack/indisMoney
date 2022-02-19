import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  .table-content {
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
  }

  .column-title {
    @media (max-width: 576px) {
      display: none;
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
      text-align: left;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      color: var(--text-body);
      border-radius: 0%.25rem;

      @media (max-width: 576px) {
        padding: 0.5rem 1rem;
      }

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);

        @media (max-width: 576px) {
          font-size: 1.5rem;
        }
      }

      &.withdraw {
        color: var(--red);

        @media (max-width: 576px) {
          font-size: 1.5rem;
        }
      }
    }
  }
`
