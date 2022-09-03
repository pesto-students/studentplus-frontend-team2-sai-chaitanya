import { useEffect, useRef, useState } from 'react';
import {
  Button,
  Input,
  message,
  SearchOutlined,
  Tag,
} from '../../../../../libs/ui-shared/src/lib/components';
import { EventForm, EventTable } from '../../components';
import styles from './eventEditor.module.scss';

const EventEditor = () => {
  const [events, setEvents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
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
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{
            width: 90,
          }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{
            width: 90,
          }}
        >
          Reset
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            confirm({
              closeDropdown: false,
            });
            setSearchText(selectedKeys[0]);
            setSearchedColumn(dataIndex);
          }}
        >
          Filter
        </Button>
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
    render: (text) => (searchedColumn === dataIndex ? text.toString() : text),
  });
  const onSubmitHandler = (submitedValues) => {
    setEvents((oldValues) => oldValues.concat(submitedValues));
    message.success('Event saved!');
  };
  useEffect(() => {
    console.log('events', events);
  }, [events]);
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
      render: (_, { cohorts }) => (
        <>
          {cohorts.map((cohort) => {
            let color = cohort.length > 5 ? 'geekblue' : 'green';

            if (cohort === 'loser') {
              color = 'volcano';
            }

            return (
              <Tag color={color} key={cohort}>
                {cohort}
              </Tag>
            );
          })}
        </>
      ),
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
  ];
  return (
    <div className={styles.eventContainer}>
      <EventForm onSubmitHandler={onSubmitHandler}></EventForm>
      <EventTable dataSource={events} columns={columnArr}></EventTable>
    </div>
  );
};

export default EventEditor;
