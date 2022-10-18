import { useEffect, useRef, useState } from 'react';
import {
  Button,
  Input,
  message,
  Space,
  SearchOutlined,
  Tag,
} from '../../../../../libs/ui-shared/src/lib/components';
import { EventForm, EventTable } from '../../components';
import styles from './eventEditor.module.scss';
import axios from 'axios';
import Highlighter from 'react-highlight-words';

const EventEditor = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({});
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [isEdit,setIsEdit] = useState(false);

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
    render: (_, { cohorts }) => (
      <>
        {cohorts.map((cohort) => {
          return (
            <Tag color="blue" key={cohort}>
              {cohort}
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
          `https://studentplus-backend.herokuapp.com/eapi/event/${submitedValues._id}`,
          submitedValues
        );
        console.log(response);
        if (response.data.success == true) {
          console.log('events', events);
          if (events == undefined) {
            return false;
          }
          const updatedEvents = events.map((item) => {
            if (item._id == submitedValues._id) {
              return {
                ...submitedValues,
                eventTitle: submitedValues.eventTitle,
              }; //gets everything that was already in item, and updates "done"
            }
            return item; // else return unmodified item
          });
          setEvents(updatedEvents);
          setIsEdit(false);
          message.success('Assignment saved!');
        } else {
          message.error('Something went wrong, please try again!');
        }
      } else {
          console.log('Allsubvalus', submitedValues);
          const response = await axios.post(
            `https://studentplus-backend.herokuapp.com/eapi/event`,
            submitedValues
          );
          console.log(response);
          if (response.data.success == true) {
            setEvents((oldValues) => oldValues.concat(submitedValues));
            message.success('Event saved!');
          } else {
            message.error('Something went wrong, please try again!');
          }
      }
    } catch (err) {
      console.log('Error', err);
    }
  };

  const onEditHandler = async (record) => {
    console.log(record);
    setIsEdit(true);
    setCurrentEvent(record);
    console.log(record);
  };

  const onDeleteHandler = async (record) => {
    console.log(record);
    const response = await axios.delete(
      `https://studentplus-backend.herokuapp.com/eapi/event/${record._id}`
    );
    console.log(response);
  };

  const getEvents = async () => {
    const response = await axios.get(
      `https://studentplus-backend.herokuapp.com/eapi/events/`
    );
    return response.data;
  };

  useEffect(() => {
    (async () => {
      const eve = await getEvents();
      setEvents(eve);
      console.log(eve);
    })();
  }, []);
  const columnArr = [
    {
      title: 'Event Title',
      dataIndex: 'eventTitle',
      key: 'eventTitle',
    },
    {
      title: 'Cohorts',
      dataIndex: 'cohorts',
      key: 'cohorts',
      ...getColumnSearchProps('cohorts'),
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      key: 'endTime',
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
      <EventForm initialValues={currentEvent}
        onSubmitHandler={onSubmitHandler}
        isEdit = {isEdit}
        editToggle= {setIsEdit}></EventForm>
      <EventTable dataSource={events} columns={columnArr}></EventTable>
    </div>
  );
};

export default EventEditor;
