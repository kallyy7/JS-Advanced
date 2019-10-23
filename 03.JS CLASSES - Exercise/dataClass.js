class Request {
    constructor(method, url, version, message) {
        this.method = method
        this.url = url
        this.version = version
        this.message = message
        this.response = undefined
        this.fulfilled = false
    }
}