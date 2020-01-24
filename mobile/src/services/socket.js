import socketio from 'socket.io-client';

const socket = socketio('https://3333-fa908d3f-ac36-4001-a791-8651d3b82c00.ws-us02.gitpod.io/', {
	autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
	socket.on('new-dev', subscribeFunction);
};

function connect(latitude, longitude, techs){
	socket.io.opts.query = {
		latitude,
		longitude,
		techs,
	};

	socket.connect();
}

function disconnect(){
	if (socket.connect) {
		socket.disconnect();
	}
}

export {
	connect,
	disconnect,
	subscribeToNewDevs,
}
