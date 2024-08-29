async function handleAsync(res, fn) {
    try {
        const members = await fn;
        res.json(members);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
}

module.exports = {
    handleAsync,
};
