import type { TableColumn } from '@nuxt/ui';
import { UBadge, UButton } from '#components';

type EntryRow = {
  code: string;
  date: string;
  outlet: { id: number; name: string };
  users: { id: number; name: string }[];
  can_complete: boolean;
  can_edit: boolean;
  can_process: boolean;
  id: number;
  status: number;
};

const statusMap: Record<
  number,
  {
    label: string;
    color:
      | 'primary'
      | 'warning'
      | 'secondary'
      | 'success'
      | 'error'
      | 'info'
      | 'neutral';
  }
> = {
  0: { label: 'Pending', color: 'warning' },
  1: { label: 'Submitted', color: 'primary' },
  2: { label: 'Processed', color: 'secondary' },
  3: { label: 'Completed', color: 'success' },
};

export const getEntryColumns = (): TableColumn<EntryRow>[] => [
  {
    accessorKey: 'code',
    header: 'Entry Code',
    cell: ({ row }) => row.getValue('code'),
  },
  {
    accessorKey: 'outlet',
    header: 'Outlet',
    cell: ({ row }) => row.original.outlet.name,
  },
  {
    accessorKey: 'users',
    header: 'Collaborators',
    cell: ({ row }) => row.original.users.map((user) => user.name).join(', '),
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      const date = new Date(row.getValue('date'));
      return date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      const meta = statusMap[status] ?? { label: 'Unknown', color: 'gray' };

      return h(
        UBadge,
        { color: meta.color, variant: 'subtle' },
        () => meta.label,
      );
    },
  },
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) =>
      h(UButton, {
        icon: 'i-heroicons-eye',
        color: 'neutral',
        variant: 'ghost',
        class: 'cursor-pointer',
        onClick: (event: MouseEvent) => {
          event.preventDefault();
          navigateTo(`/dashboard/entries/${row.original.id}`);
        },
      }),
  },
];
