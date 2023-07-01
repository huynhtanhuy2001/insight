import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storage } from '../../../../config/firebase';
import { setAvatarImageUrl } from '../../../../redux/slice/avatarSlice';
import { MailOutlined, BellOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import {RootState} from "../../../../redux/store";
import { ref,getDownloadURL } from 'firebase/storage';


const AccNotiMail = () => {
  const imageUrl = useSelector((state: RootState) => state.avatar.imageUrl);
  const dispatch = useDispatch();
  useEffect(() => {
    const avatarRef = ref(storage, 'images/avatar.jpg');
    getDownloadURL(avatarRef)
      .then((url: string) => {
        dispatch(setAvatarImageUrl(url));
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [dispatch]);
  
  return (
    <div
      style={{
        display: "flex",
        width: "144px",
        height: "48px",
        justifyContent: "flex-end",
      }}
    >
      <MailOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
      <BellOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
      <Avatar src={imageUrl}/>
    </div>
  );
};

export default AccNotiMail;
