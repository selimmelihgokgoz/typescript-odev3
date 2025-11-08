class Logger {
    private logHistory: string[] = [];	//tanımlama
    
    log(message: string): void {	//konsola yaz ekle kısmı
        console.log(message);
        this.logHistory.push(message);
    }
     getHistory(): string[] {		//döndürme
        return this.logHistory;
    }
}

const logger = new Logger();
logger.log("İlk log.");
logger.log("İkinci log.");

console.log(logger.getHistory());

