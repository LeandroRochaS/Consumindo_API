/* eslint-disable no-unused-vars */
import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as actions from "./actions";
import * as types from "../types";
import axios from "../../../services/axios";
import history from "../../../services/history";
import { get } from "loadsh";

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, "/tokens", payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success("Você logou");

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
    history.go(0);
  } catch (e) {
    toast.error("Usuário ou senha inválidos.");

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, "auth.token", "");
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  try {
    if (id) {
      yield call(axios.put, "/users", {
        email,
        nome,
        password: password || undefined,
      });
      toast.success("Conta alterada");
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, "/users", {
        email,
        nome,
        password,
      });

      toast.success("Conta criada");
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      history.push("/login");
      history.go(0);
    }
  } catch (err) {
    const errors = get(err, "response.data.errors", []);
    const status = get(err, "response.status", 0);

    if (status == 401) {
      toast.error("Você precisa fazer login novamente");
      yield put(actions.loginFailure());
      history.push("/login");
      yield delay(4000);
      history.go(0);
    }

    if (errors.length > 0) {
      errors.map((e) => toast.error(e));
    } else {
      toast.error("Erro desconhecido");
    }

    yield put(actions.registerFailure());
  }

  console.log(payload);
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
