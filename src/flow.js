export class Flow {
    constructor(address) {
        const socket = new WebSocket(address);
        socket.addEventListener('message', (e) => this._onMessage(e.data));
        this._actions = [];
    }

    _onMessage(message) {
        let data = JSON.parse(message);
        this._actions.forEach(action => {
            data = action(data);
            if (data == undefined) {
                return;
            }
        });
    }

    /**
     * 消息过滤
     * @param {function} action 过滤条件,例：message => message == "Flow" 
     */
    where(action) {
        var whereAction = (data) => {
            if (action(data)) {
                return data;
            }
            return undefined;
        }
        this._actions.push(whereAction);
        return this;
    }

    /**
     * 消息转换
     * @param {function} action 转换方法,例: message => message + "Flow"
     */
    map(action) {
        this._actions.push(action);
        return this;
    }

    /**
     * 消息处理
     * @param {function} action 消息处理方法,例：message => alert(message)
     */
    subscribe(action) {
        this._actions.push(action);
    }

    /**
     * 推送消息
     * @param {object} data 将要被推送的数据
     */
    publish(data){
        var message = JSON.stringify(data);
    }
}