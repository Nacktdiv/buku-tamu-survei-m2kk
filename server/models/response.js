const response = (data, message, status) => {
    return {
        'status': status,
        "message": message,
        "data": data,
        "meta": {
            "timestamp": "2023-10-27T10:00:00Z"
        }
    }
}

module.exports = response;