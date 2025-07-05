export default defineAppConfig({
  ui: {
    colors: {
      primary: 'black',
      neutral: 'slate',
    },
    colorMode: 'system',
    pagination: {
      slots: {
        list: 'flex flex-wrap items-center gap-1',
      },
    },
  },
});
