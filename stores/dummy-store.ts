const tableCols = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: (row: { id: any }) => row.id,
    //format: (val: any) => `${val}`,
    sortable: true,
  },
  {
    name: 'label',
    align: 'center',
    label: 'Label',
    field: 'label',
    sortable: true,
  },
  { name: 'acna', label: 'ACNA', field: 'acna' },
  { name: 'country', label: 'Country', field: 'country', sortable: true },
  { name: 'sb', label: 'Sponsored By', field: 'sb' },
];

const tableData = [
  {
    id: 'XYZ',
    label: 'Some Label',
    acna: 'ACNA',
    sb: 'SB',
    country: 'US',
  },
  {
    id: '23',
    label: 'Some Label',
    acna: 'ACNA',
    sb: 'SB',
    country: 'US',
  },
  {
    id: 'XY45',
    label: 'Some Label',
    acna: 'ACNA',
    sb: 'SB',
    country: 'US',
  },
  {
    id: '56',
    label: 'Some Label',
    acna: 'ACNA',
    sb: 'SB',
    country: 'US',
  },
];

const darkModeActive = ref(true)

export { tableCols, tableData, darkModeActive };
