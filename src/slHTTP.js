class slHTTP {
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;

    }

    async delete(url, data) {

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await 'Resource Deleted....';
        return resData;
    }
}

const http = new slHTTP();
export default http;