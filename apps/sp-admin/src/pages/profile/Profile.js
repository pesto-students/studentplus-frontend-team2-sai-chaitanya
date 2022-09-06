import React from 'react';
import { Listing } from '../../components';
import {
  Avatar,
  Button,
  Card,
  InputGroup,
  Label,
  Col,
  Row,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './profile.module.scss';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';

function Profile() {
  const { oktaAuth, authState } = useOktaAuth();
  const [userDetails, setUserDetails] = useState({});
  const [userAddress, setUserAddress] = useState('');
  const getUserInfo = async () => {
    const response = await axios.get(
      `http://localhost:3000/sapi/student/${authState.idToken.claims.studentid}`
    );
    return response.data;
  };
  useEffect(() => {
    getUserInfo().then((resp) => {
      setUserDetails(resp);
	  const address = `${resp.streetAddr}, ${resp.city}, ${resp.state}, ${resp.country}`;
	  setUserAddress(address);
    });
  }, []);
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <Card>
          <div className={styles.avatarCover}>
            <Avatar size={150} src={userDetails.img} />
            <Label strong={false} className={styles.label}>
              {userDetails.email}
            </Label>
          </div>
          <div className={styles.userInfoCover}>
            <InputGroup>
              <Row gutter={8}>
                <Col span={24}>
                  <Label className={styles.profileLabel}>{userAddress}</Label>
                </Col>
                <Col span={24}>
                  <Label className={styles.profileLabel}>
                    {userDetails.phone}
                  </Label>
                </Col>
                <Col span={24}>
                  <Label className={styles.profileLabel}>
                    {userDetails.email}
                  </Label>
                </Col>
              </Row>
            </InputGroup>
            <div className={styles.buttonCover}>
              <Button htmltype="submit" className={styles.editProfileBtn}>
                Edit
              </Button>
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.otherInfo}>
        <div className={styles.info}>
          <Card title="Assignments">
            <div className={styles.cardContainer}>
              <Listing percent={50} />
              <Listing percent={30} />
              <Listing percent={70} />
            </div>
          </Card>
        </div>
        <div className={styles.info}>
          <Card title="Chatboards">
            <div className={styles.cardContainer}>
              <Listing percent={20} />
              <Listing percent={80} />
              <Listing percent={38} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Profile;
