import { useEffect, useRef, useState } from 'react';
import {
  Button,
  Input,
  message,
  Space,
  SearchOutlined,
  Tag,
} from '../../../../../libs/ui-shared/src/lib/components';
import { DiscussionForm, DiscussionTable } from '../../components';
import styles from './discussionEditor.module.scss';
import axios from 'axios';
import { COHORTS } from '../attendance/data/DATA';

const DiscussionEditor = () => {
  const [discussions, setDiscussions] = useState([]);
  const [currentDiscussion, setCurrentDiscussion] = useState({});
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
          `http://localhost:3000/dapi/discussion/${submitedValues._id}`,
          submitedValues
        );
        console.log(response);
        if (response.data.success == true) {
          console.log('discussions', discussions);
          if (discussions == undefined) {
            return false;
          }
          const updatedDiscussions = discussions.map((item) => {
            if (item._id == submitedValues._id) {
              return {
                ...submitedValues,
                discussionTitle: submitedValues.discussionTitle,
              }; //gets everything that was already in item, and updates "done"
            }
            return item; // else return unmodified item
          });
          setDiscussions(updatedDiscussions);
          message.success('Discussion saved!');
        } else {
          message.error('Something went wrong, please try again!');
        }
      } else {
        const response = await axios.post(
          `http://localhost:3000/dapi/discussion`,
          submitedValues
        );
        console.log(response);
        if (response.data.success == true) {
          setDiscussions((oldValues) => oldValues.concat(submitedValues));
          message.success('Discussion saved!');
        } else {
          message.error('Something went wrong, please try again!');
        }
      }
    } catch (err) {
      console.log('Error', err);
    }
  };
  const getDiscussions = async () => {
    const response = await axios.get(`http://localhost:3000/dapi/discussions/`);
    return response.data;
  };
  useEffect(() => {
    console.log(currentDiscussion);
    (async () => {
      const discuss = await getDiscussions();
      setDiscussions(discuss);
      console.log(discuss);
    })();
  }, []);
  const onEditHandler = async (record) => {
    setCurrentDiscussion(record);
    console.log(record);
  };
  const onDeleteHandler = async (record) => {
    console.log(record);
    const response = await axios.delete(
      `http://localhost:3000/dapi/discussion/${record._id}`
    );
    console.log(response);
  };
  const columnArr = [
    {
      title: 'Discussion Title',
      dataIndex: 'discussionTitle',
      key: 'discussionTitle',
    },
    {
      title: 'Cohorts',
      dataIndex: 'cohorts',
      key: 'cohorts',
      ...getColumnSearchProps('cohorts'),
    },
    {
      title: 'Assignments',
      dataIndex: 'assignments',
      key: 'assignments',
      ...getColumnSearchProps('assignments'),
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
      <DiscussionForm
        initialValues={currentDiscussion}
        onSubmitHandler={onSubmitHandler}
      />
      <DiscussionTable
        rowKey="_id"
        dataSource={discussions}
        columns={columnArr}
      />
    </div>
  );
};

export default DiscussionEditor;
