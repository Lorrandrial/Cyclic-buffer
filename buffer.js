function Buffer(length) {

    this.length = length;
    this.tail = 0;
    this.head = 0;
    this.buffer = new Array(length);
    this.size = 0;
    this.next = 0;

    Buffer.prototype.Write = function(value) {
        if (this.head <= this.length) {
            if (this.head >= this.length) {
                this.head = 0;
            }
            this.buffer[this.head++] = value;
        }
    }
    Buffer.prototype.Read = function() {
        var t = this.buffer[this.tail];
        var setTail = this.tail < this.length ? (this.tail + 1) : this.tail;
        if (setTail >= this.length) {
            setTail = 0;
        }
        this.tail = setTail;
        return t;
    }
    Buffer.prototype.Get = function() {
        return this.buffer;
    };
    Buffer.prototype.Current = function() {
        return this.buffer[this.head - 1];
    };
    Buffer.prototype.ForEach = function(func) {
        for (i = 0; i < this.buffer.length; i++) {
            func(this.buffer[i], i);
        }
    }
};
