import axios from 'axios';
import { message } from '../../../../../libs/ui-shared/src/lib/components/atoms';
const getUserInfo = async (userId) => {
  try {
    const response = await axios.get(
      `https://studentplus-backend.herokuapp.com/sapi/student/${userId}`
    );
    return response.data;
  } catch (err) {
    console.log('Erro', err.message);
  }
};

const getStudentCohorts = async (resp) => {
  try {
    const response = await axios.get(
      `https://studentplus-backend.herokuapp.com/capi/student-cohort/${resp.cohort}`
    );
	return response;
  } catch (err) {
    console.log('Erro', err.message);
  }
};

const getStudentCohortEvents = async (resp, offset, numberOfEvents) => {
  try {
    const events = await axios.get(
      `http://localhost:3000/capi/cohort-events/${resp.cohort}/${offset}/${numberOfEvents}`
    );
    return events;
  } catch (err) {
    console.log('Erro', err.message);
  }
};

const uploadProfileImage = async (formData, setImageUrl) => {
  try {
    const response = await axios
      .post('https://api.cloudinary.com/v1_1/dhibsuxt9/image/upload', formData)
      .then((res) => {
        setImageUrl(res.data.secure_url);
        console.log('Cloudinary Resp :', res);
      });
  } catch (err) {
    console.log('Cloudinary Error :', err);
  }
};

const updateProfile = async (userId, values) => {
  try {
    const response = await axios.put(
      `https://studentplus-backend.herokuapp.com/sapi/student/${userId}`,
      values
    );
    message.success('Profile Updated!');
  } catch (err) {
    console.log('Error :', err);
  }
};

const updatePassword = async (userId, values) => {
  values.email = userId;
  try {
    const response = await axios.post(
      `https://studentplus-backend.herokuapp.com/sapi/change-password/`,
      values
    );
    message.success('Password Updated!');
  } catch (err) {
    console.log('Error :', err);
  }
};

const getCommentsByDiscussionId = async (discussionId, setComments) => {
  try {
    const response = await axios.get(
      `https://studentplus-backend.herokuapp.com/coapi/comments/${discussionId}`
    );
    setComments(response);
  } catch (err) {
    console.log('Error :', err);
  }
};
const getAllDiscussions = async () => {
  const response = await axios.get(
    `https://studentplus-backend.herokuapp.com/dapi/discussions`
  );
  return response.data;
};

const getDiscussionsByCohort = async (cohortId) => {
  const response = await axios.get(
    `https://studentplus-backend.herokuapp.com/dapi/discussions/${cohortId}`
  );
  return response.data;
};

const pushComment = async (userId, discussionId, values) => {
  getUserInfo(userId).then(async (resp) => {
    values.user = {
      userId: userId,
      userName: resp.firstName,
      avatarImg: resp.img,
    };
    values.discussionId = discussionId;
    values.textMessage = values.textMessage;
    try {
      const response = await axios.post(
        `https://studentplus-backend.herokuapp.com/coapi/comment/`,
        values
      );
      console.log('commentSta', response);
    } catch (err) {
      console.log('Error :', err);
    }
  });
};
export {
  getUserInfo,
  getStudentCohorts,
  getStudentCohortEvents,
  uploadProfileImage,
  updateProfile,
  updatePassword,
  getCommentsByDiscussionId,
  getAllDiscussions,
  pushComment,
  getDiscussionsByCohort,
};
