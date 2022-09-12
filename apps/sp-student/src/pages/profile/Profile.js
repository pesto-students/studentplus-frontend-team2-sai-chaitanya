import React, { useEffect, useState } from 'react';
import { Listing } from '../../components';
import {
  Avatar,
  Button,
  Card,
  InputGroup,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  Label,
  Col,
  Row,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './profile.module.scss';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from '../../routes/serverCalls';

function Profile() {
  const { oktaAuth, authState } = useOktaAuth();
  const [userDetails, setUserDetails] = useState({});
  const [userAddress, setUserAddress] = useState('');
  const [userAssignments, setUserAssignments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getUserInfo(authState.idToken.claims.studentid).then((resp) => {
      setUserDetails(resp);
      const address = `${resp.streetAddr}, ${resp.city}, ${resp.state}, ${
        resp.country ? resp.country : ''
      }`;
      setUserAddress(address);
    });
  }, []);

  useEffect(() => {
    console.log('UserD', userDetails);
    console.log(userDetails.assignment);
    const assignments = !!userDetails.assignment ? userDetails.assignment : [];
    setUserAssignments(assignments);
  }, [userDetails]);

  const onEditClickHandler = () => {
    history.push('/account-settings');
  };
  
  return (
    <div className={styles.profileContainer}>
      <Row>
        <Col span={14} xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card>
            <div className={styles.avatarCover}>
              <Avatar size={150} src={userDetails.img} />
              <Label strong={false} className={styles.label}>
                {userDetails.firstName} {userDetails.lastName}
              </Label>
            </div>
            <div className={styles.userInfoCover}>
              <InputGroup>
                <Row gutter={8}>
                  <Col span={24}>
                    <Label className={styles.profileLabel}>
                      <HomeOutlined />
                      {userAddress}
                    </Label>
                  </Col>
                  <Col span={24}>
                    <Label className={styles.profileLabel}>
                      <PhoneOutlined />
                      {userDetails.phone}
                    </Label>
                  </Col>
                  <Col span={24}>
                    <Label className={styles.profileLabel}>
                      <MailOutlined />
                      {userDetails.email}
                    </Label>
                  </Col>
                </Row>
              </InputGroup>
              <div className={styles.buttonCover}>
                <Button
                  htmltype="button"
                  className={styles.editProfileBtn}
                  onClickHandler={onEditClickHandler}
                >
                  Edit
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={10} xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row>
            <Col span={24}>
              <div className={styles.info}>
                <Card title="Assignments">
                  <div className={styles.cardContainer}>
                    {userAssignments.map((assignment, index) => {
                      return (
                        <Listing
                          key={index}
                          title={assignment.title}
                          excerpt="This is a test excerpt"
                          percent={assignment.progress}
                        />
                      );
                    })}
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.info}>
                <Card title="Discussions">
                  <div className={styles.cardContainer}>
                    <Listing percent={20} type="link" />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
