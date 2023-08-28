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


const one_mega_bit = 1000000 // 1 MegaBit
async function speedTest() {
    var s, e, t
    var tt = 0
    for (var i = 0; i < 10; i++) {
        s = performance.now()
	await
	await downloadData(one_mega_bit * 100) // # 100MB
        e = performance.now()
        t = e - s
        tt += t
    }
    console.log((one_mega_bit * 100 * 10) / tt)
}

speedTest()


