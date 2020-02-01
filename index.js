setInterval(() => {
    process.stdout.write('Hello');
    console.log(' World');

},5000);
    process.on('SIGTERM', () => {
        console.log('asd');
    });



process.on('unhandledRejection', reason => {
    logger.fatal({ err: reason }, 'Unhandled Rejection');
    process.exit(1);
});

process.on('uncaughtException', err => {
    logger.fatal({ err }, 'Unhandled Exception');
    process.exit(1);
});

process.on('warning', err => {
    logger.error({ err }, 'Warning detected');
});

process.on('exit', code => {
    logger.info('Stopped with code: ${code}');
});