import { put, take } from '@redux-saga/core/effects';
import { loginSuccess, saveKeyPair } from 'features/session/sessionSlice';
// import { sendPublicKey } from 'features/chat/chatSlice';
import { generateKeyPair } from 'utils/encryption.ts';
import { encodeKey } from 'utils/helpers';

export function* otherSideEffects() {
  while (true) {
    const action = yield take([loginSuccess]);

    const keyPair = generateKeyPair();

    const encodedKeyPair = encodeKey(keyPair);

    yield put(saveKeyPair({ keyPair: encodedKeyPair }));
    // yield put(sendPublicKey({})); // Broadcast public key to all peers
  }
}
