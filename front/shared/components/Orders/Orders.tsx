import { api } from "@/shared/api/api";
import { useQuery } from "@tanstack/react-query";
import { Order } from "../Cart";
import { useAuthStore } from "@/shared/stores/auth";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";




export const Orders: React.FC = () => {
const token = useAuthStore((state) => state.token);
   const getOrders = () => api.getOrders(token);
   const {data: orders = [], isLoading} = useQuery<Order[]>({queryKey:['order'], queryFn: getOrders});   

  return (
    <section className="flex flex-col w-full">
      <div className="flex mb-2"></div>
      {!isLoading ? (
        <div className="mt-2">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Имя</TableCell>
                  <TableCell>Телефон</TableCell>
                  <TableCell>Адрес</TableCell>
                  <TableCell>Заказ</TableCell>
                  <TableCell>Комментарий</TableCell>
                  <TableCell>Дата заказа</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((row)=>(
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.adress}</TableCell>
                    <TableCell>{row.orderString}</TableCell>
                    <TableCell>{row.comment}</TableCell>
                    <TableCell>{row.createdAt.slice(0, 10)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div>Загрузка...</div>
      )}
    </section>
  );
};