export default interface Props {
  handleChangePage: (name: string) => void;
  pagination: {
    page: number;
    limit: number;
  };
}
