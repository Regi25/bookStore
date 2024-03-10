import UserProvider  from "@/components/UserProvider";
import AddBookForm from "@/components/AddBookForm";

const AddBook: React.FC = () => {
  return (
    <UserProvider>
      <AddBookForm />
    </UserProvider>
  );
};

export default AddBook;