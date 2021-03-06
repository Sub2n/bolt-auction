import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from '../../styles/Colors';
import Button from '../common/Button';
import Modal from '../common/Modal';
import TextField from '../common/TextField';
import Welcome from './Welcome';
import LoadingSpinner from '../common/LoadingSpinner';
import ModalPortal from '../common/ModalPortal';

/*
 * TODO:
 *  []로그인 페이지일때 상단에 안내 메시지, 이미지 추가
 *  []회원가입 할때 개인정보 이용 동의, 약관 동의 체크 버튼 추가
 *  []에러 메시지 출력될때 흔들리는 애니메이션 추가
 *  []카카오톡 로그인 기능 구현
 */

const AuthFormBlock = styled.div`
  width: 100%;
  h3 {
    margin: 0;
    color: ${Colors.gray[8]};
    margin-bottom: 1rem;
  }
`;

const AuthFooter = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${Colors.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${Colors.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  height: 36px;
  font-size: 14px;
  padding: 0.25rem;
`;

const textMap = {
  signin: '로그인',
  signup: '회원가입',
};

const ErrorMessage = styled.div`
  position: absolute;
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 0.75rem;
  width: 328px;
  animation: vibrate 1s ease;
  animation-fill-mode: forwards;
  @keyframes vibrate {
    0%,
    50% {
      transform: translateX(0px);
    }
    5%,
    15%,
    25%,
    35%,
    45% {
      transform: translateX(2px);
    }
    10%,
    20%,
    30%,
    40% {
      transform: translateX(-2px);
    }
  }
`;

/**
 * container에서 type으로 전달되는 signin, signout에 맞추어 랜더링 됩니다.
 * @param {object} props
 * @param {string} props.type - "signin" | "signup"
 * @param {FormData} props.form -
 *  - (type="signin") {uid, passwd}
 *  - (type="signup") {uid, passwd, passwdConfirm, name}
 * @param {event} props.onChange
 * @param {event} props.onSubmit
 * @param {?string} props.error 유저에게 보여지는 에러 메시지
 */
const AuthForm = ({ type, form, onChange, onSubmit, loading, error }) => {
  const text = textMap[type];
  return (
    <Modal randomBg title={text}>
      {loading && (
        <ModalPortal>
          <LoadingSpinner />
        </ModalPortal>
      )}
      {type === 'signin' && <Welcome />}
      <AuthFormBlock>
        <form onSubmit={onSubmit}>
          <TextField
            name="uid"
            type="email"
            icon="mail"
            placeholder="이메일"
            autoComplete="uid"
            onChange={onChange}
            value={form.uid}
          />
          <TextField
            name="passwd"
            type="password"
            icon="lock"
            placeholder="비밀번호"
            autoComplete="new-password"
            onChange={onChange}
            value={form.passwd}
          />
          {type === 'signup' && (
            <TextField
              name="passwdConfirm"
              type="password"
              icon="lockCheck"
              placeholder="비밀번호 확인"
              autoComplete="new-password"
              onChange={onChange}
              value={form.passwdConfirm}
            />
          )}
          {type === 'signup' && (
            <TextField
              name="name"
              type="text"
              icon="person"
              placeholder="닉네임"
              autoComplete="name"
              onChange={onChange}
              value={form.name}
            />
          )}
          <ButtonWithMarginTop primary fullwidth>
            {text}
          </ButtonWithMarginTop>
        </form>
        {type === 'signin' && (
          <ButtonWithMarginTop kakao fullwidth disabled>
            카카오톡으로 로그인
          </ButtonWithMarginTop>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <AuthFooter>
          {type === 'signin' ? (
            <Link to="/signup">회원가입</Link>
          ) : (
            <Link to="/signin">로그인</Link>
          )}
        </AuthFooter>
      </AuthFormBlock>
    </Modal>
  );
};

export default AuthForm;
