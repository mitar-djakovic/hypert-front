import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  view: {
    // width: '100%',
    height: 'calc(100vh - 50px)',
    boxSizing: 'border-box',
    padding: 30,
    display: 'grid',
    backgroundColor: '#f6f7fb',
  },
  lists: {
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'start',
    overflowX: 'auto',
    height: '100%',
    '::-webkit-scrollbar': {
      height: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#66a3c7',
    },
  },
  list: {
    display: 'flex',
    flex: '0 0 320px',
    flexDirection: 'column',
    backgroundColor: '#e2e4e6',
    maxHeight: 'calc(100vh - 100px)',
    borderRadius: '4px',
    marginRight: '12px',
  },
});

/*

The following rule will only run if your browser supports CSS grid.

Remove or comment-out the code block below
to see how the browser will fall-back to flexbox styling.

*/

/* @supports (display: grid) {
  .lists-container {
    display: grid;
    grid-auto-columns: 320px;
    grid-auto-flow: column;
    grid-column-gap: 1rem;
  }

  .list {
    display: grid;
    grid-template-rows: auto minmax(auto, 100%) auto;
  }

  .list-items {
    display: grid;
    grid-row-gap: 0.6rem;
  }

  .list,
  .list-items li,
  .boards-btn,
  .board-info-bar,
  .board-controls .btn,
  .user-settings-btn {
    margin: 0;
  }
} */
