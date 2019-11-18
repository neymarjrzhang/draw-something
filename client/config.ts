import { IS_DEV_CLIENT } from "./util/constants";

function getConfig() {
    if (IS_DEV_CLIENT) {
        return {
            addr: 'ws://127.0.0.1:9421',
            // addr: 'ws://192.168.137.1:9421',
        }
    }
    return {
        addr: 'ws://101.37.174.138:9421',
    };
}

export default getConfig();

