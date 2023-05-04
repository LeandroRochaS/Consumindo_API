import styled from "styled-components";

export const SpaceButton = styled.button`
  margin-top: 15px;
`;
export const Title = styled.h1`
  text-align: center;
`;
export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 25px;
  position: relative;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #d64161;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
