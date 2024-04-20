import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const DeleteButton = ({ message, onClickHandle }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md">
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="fond-semibold">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            {`This action cannot be undone. This will permanently delete your
                 ${message} and remove your data from our servers.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClickHandle}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteButton;
