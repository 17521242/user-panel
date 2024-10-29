import { Switch, useDisclosure } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/react";
export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const customer = [
    { id: "01", name: "Tuong Nguyen" },
    { id: "02", name: "ABC" },
  ];

  return (
    <div className="h-screen w-full bg-[#f1f1f1]">
      <div className="flex bg-white">
        <div className="basis-1/4 bg-slate-700"></div>
        <div className="flex basis-2/4 gap-1 justify-end p-2">
          <div className="flex self-center">
            <Switch aria-label="Theme mode" />

            <Input label="Search" size="sm" />
          </div>
        </div>
        <div className="flex basis-1/4 justify-end gap-2 p-2">
          <Button className="self-center" color="warning">
            Log in
          </Button>
          <Button className="self-center" color="success">
            Log out
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 my-2 mx-2">
        <div className="flex justify-end">
          <Button color="primary" onClick={onOpen}>
            Add new
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex justify-center">
                    Add new product
                  </ModalHeader>
                  <ModalBody className="">
                    <Input label="Product ID" />
                    <Input label="Product name" />
                    <Input label="Product category" />
                    <Autocomplete
                    label="Select a customer"
                    className="max-w-xs">
                      {customer.map((item)=>(
                        <AutocompleteItem key={item.id}>
                          {item.name}
                        </AutocompleteItem>
                      ))}

                    </Autocomplete>
                    <DatePicker label="Date" />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" variant="solid">
                      Submit
                    </Button>
                    <Button color="danger" onPress={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div className="w-full">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Zoey Lang</TableCell>
                <TableCell>Technical Lead</TableCell>
                <TableCell>Paused</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jane Fisher</TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>William Howard</TableCell>
                <TableCell>Community Manager</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
