import mongoose from 'mongoose';
import environment from './environment.js';

export const connectDatabase = async () => {
	try {
		const connectionUrl = `mongodb+srv://${environment.database_username}:${environment.database_password}@${environment.database_name}${environment.database_url}`;

		// conecta con la base de datos
		const response = await mongoose.connect(connectionUrl, {
			dbName: environment.database_name,
		});

		// verifica si se establecio la conexión
		if (response.connections[0]._hasOpened) {
			console.info({
				status: 'success',
				message: 'Connection to database successful',
			});

			return true;
		} else {
			console.error({
				status: 'error',
				message:
					'Attempt to connect to database failed (configuration module error)',
			});
			return false;
		}
	} catch (error) {
		console.error({
			status: 'error',
			message: 'Unable to connect to database',
			error: error,
		});
		throw error;
	}
};

export const connectServer = async (appName) => {
	try {
		const isDBConnected = await connectDatabase();

		// si la base de datos no conecta, no permite la ejecución del servidor
		if (isDBConnected) {
			appName.listen(environment.port, () => {
				console.info({
					status: 'success',
					message: `Server is running on http://${environment.server_url}:${environment.port}`,
				});
			});

			// escucha errores durante la conexión con la base de datos
			mongoose.connection.on('error', (error) => {
				console.error({
					status: 'error',
					message:
						'An error was found. Unable to connect to database (configuration module error)',
					error: error,
				});
				throw error;
			});
		} else {
			console.error({
				status: 'error',
				message: 'The server cannot run, because the database is not online',
			});
			return;
		}
	} catch (error) {
		console.error({
			status: 'error',
			message: 'Unable to run server (connection module error)',
			error: error,
		});
	}
};
