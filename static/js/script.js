const downloadData = async (bytes) => {
    try {
        const response = await fetch('/speed-test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ bytes: bytes })
        });
        if (!response.ok) {
            throw new Error('Fetch failed');
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
};


const MB1 = 1000000 // 1 MegaBit
const MB100 = MB1 * 100
var TTS = 0
async function speedTest() {
    var s, e
    var total_time_in_sec = 0
    for (var i = 0; i < 10; i++) {
        s = performance.now()
	await downloadData(MB100)
        e = performance.now()
	TTS += (e-s)*0.001
    }
    console.log(TTS)
    const speed = (MB100 * 10) / TTS
    console.log(speed)
}

speedTest()


