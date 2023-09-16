import { Table, Thead, TableTitle, TableRow } from "./Transactions.styled";

export const Transactions = ({ transactions }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
          </Thead>
          
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableRow>{type}</TableRow>
            <TableRow>{amount}</TableRow>
            <TableRow>{currency}</TableRow>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
