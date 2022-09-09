import { useEffect, useRef, useState } from 'react';
import { AssignmentForm, AssignmentTable } from '../../components';
import {
  Button,
  Input,
  message,
  Space,
  SearchOutlined,
  Tag,
} from '../../../../../libs/ui-shared/src/lib/components';
import styles from './assignmentEditor.module.scss';
import axios from 'axios';

const AssignmentEditor = () => {
	 const [assignments, setAssignments] = useState([]);
   const [currentAssignment, setCurrentAssignments] = useState({});
   const [searchText, setSearchText] = useState('');
   const [searchedColumn, setSearchedColumn] = useState('');
   const searchInput = useRef(null);
   const handleSearch = (selectedKeys, confirm, dataIndex) => {
     console.log('Search clicked!!');
     confirm();
     setSearchText(selectedKeys[0]);
     setSearchedColumn(dataIndex);
   };
   const handleReset = (clearFilters) => {
     console.log('Reset clicked!!');
     clearFilters();
     setSearchText('');
   };
   const getColumnSearchProps = (dataIndex) => ({
     filterDropdown: ({
       setSelectedKeys,
       selectedKeys,
       confirm,
       clearFilters,
     }) => (
       <div
         style={{
           padding: 8,
         }}
       >
         <Input
           ref={searchInput}
           placeholder={`Search ${dataIndex}`}
           value={selectedKeys[0]}
           onChange={(e) =>
             setSelectedKeys(e.target.value ? [e.target.value] : [])
           }
           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
           style={{
             marginBottom: 8,
             display: 'block',
           }}
         />
         <Space>
           <Button
             type="primary"
             htmlType="button"
             onClickHandler={() =>
               handleSearch(selectedKeys, confirm, dataIndex)
             }
             size="small"
             style={{
               width: 90,
             }}
           >
             Search
           </Button>
           <Button
             htmlType="button"
             onClickHandler={() => clearFilters && handleReset(clearFilters)}
             size="small"
             style={{
               width: 90,
             }}
           >
             Reset
           </Button>
           <Button
             type="link"
             htmlType="button"
             size="small"
             onClickHandler={() => {
               console.log('Filter cliked!!');
               clearFilters();
               confirm({
                 closeDropdown: false,
               });
               setSearchText(selectedKeys[0]);
               setSearchedColumn(dataIndex);
             }}
           >
             Filter
           </Button>
         </Space>
       </div>
     ),
     filterIcon: (filtered) => (
       <SearchOutlined
         style={{
           color: filtered ? '#1890ff' : undefined,
         }}
       />
     ),
     onFilter: (value, record) =>
       record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
     onFilterDropdownVisibleChange: (visible) => {
       if (visible) {
         setTimeout(() => searchInput.current?.select(), 100);
       }
     },
     render: (data) => (
       <>
         {data.map((val) => {
           return (
             <Tag color="blue" key={val}>
               {val}
             </Tag>
           );
         })}
       </>
     ),
   });
   const onSubmitHandler = async (submitedValues) => {
     try {
       if (submitedValues._id !== undefined && submitedValues._id !== null) {
         const response = await axios.put(
           `https://studentplus-backend.herokuapp.com/aapi/assignment/${submitedValues._id}`,
           submitedValues
         );
         console.log(response);
         if (response.data.success == true) {
           console.log('assignments', assignments);
           if (assignments == undefined) {
             return false;
           }
           const updatedAssignments = assignments.map((item) => {
             if (item._id == submitedValues._id) {
               return {
                 ...submitedValues,
                 assignmentTitle: submitedValues.assignmentTitle,
               }; //gets everything that was already in item, and updates "done"
             }
             return item; // else return unmodified item
           });
           setAssignments(updatedAssignments);
           message.success('Assignment saved!');
         } else {
           message.error('Something went wrong, please try again!');
         }
       } else {
         const response = await axios.post(
           `https://studentplus-backend.herokuapp.com/aapi/assignment`,
           submitedValues
         );
         console.log(response);
         if (response.data.success == true) {
           setAssignments((oldValues) => oldValues.concat(submitedValues));
           message.success('Assignment saved!');
         } else {
           message.error('Something went wrong, please try again!');
         }
       }
     } catch (err) {
       console.log('Error', err);
     }
   };
   const getAssignments = async () => {
     const response = await axios.get(
       `https://studentplus-backend.herokuapp.com/aapi/assignments/`
     );
     return response.data;
   };
   useEffect(() => {
     console.log(currentAssignment);
     (async () => {
       const assign = await getAssignments();
       setAssignments(assign);
       console.log(assign);
     })();
   }, []);
   const onEditHandler = async (record) => {
	console.log(record);
     setCurrentAssignments(record);
     console.log(record);
   };
   const onDeleteHandler = async (record) => {
     console.log(record);
     const response = await axios.delete(
       `https://studentplus-backend.herokuapp.com/aapi/assignment/${record._id}`
     );
     console.log(response);
   };
   const columnArr = [
     {
       title: 'Assignment Title',
       dataIndex: 'assignmentTitle',
       key: 'assignmentTitle',
     },
     {
       title: 'Cohorts',
       dataIndex: 'cohorts',
       key: 'cohorts',
       ...getColumnSearchProps('cohorts'),
     },
     {
       title: 'Description',
       dataIndex: 'desc',
       key: 'desc',
     },
     {
       title: 'Action',
       key: 'action',
       render: (_, record) => (
         <Space size="middle">
           <Button
             htmlType="link"
             onClickHandler={() => {
               onEditHandler(record);
             }}
           >
             Edit
           </Button>
           <Button
             htmlType="link"
             onClickHandler={() => {
               onDeleteHandler(record);
             }}
           >
             Delete
           </Button>
         </Space>
       ),
     },
   ];
  return (
    <div className={styles.eventContainer}>
      <AssignmentForm
        initialValues={currentAssignment}
        onSubmitHandler={onSubmitHandler}
      />
      <AssignmentTable
        rowKey="_id"
        dataSource={assignments}
        columns={columnArr}
      />
    </div>
  );
};

export default AssignmentEditor;
