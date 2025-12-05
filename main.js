var list = [
    {
        "text": "vaino ja toomas uibo",
        "url": "https://www.youtube-nocookie.com/embed/9I51J5leFGI?autoplay=1"
    },
    {
        "text": "riot!",
        "url": "https://www.youtube-nocookie.com/embed/phhZbHxFbM8?autoplay=1"
    },
    {
        "text": "jonnys odyssey",
        "url": "https://www.youtube-nocookie.com/embed/RPgdZht906c?autoplay=1"
    },
    {
        "text": "my house by the water",
        "url": "https://www.youtube-nocookie.com/embed/rM7pszYiMlM?autoplay=1"
    },
    {
        "text": "mr gruf",
        "url": "https://www.youtube-nocookie.com/embed/nxEviJQvPxw?autoplay=1"
    }
];
const number = Math.floor(Math.random() * list.length);
const link = list[number];
document.getElementById('secretsong').innerText = link.text;

const tabs = document.querySelectorAll('nav a');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const oldActiveContent = document.querySelector('.tab-content.active');
        const newContent = document.querySelector(`.tab-content[data-content="${target}"]`);

        if (oldActiveContent === newContent) {
            return;
        }
        if (oldActiveContent) {
            oldActiveContent.classList.remove('active');
        }

        setTimeout(() => {
            if (newContent) {
                newContent.classList.add('active');
            }
        }, 500);
    });
});

document.querySelector('.tab-content[data-content="home"]').classList.add('active');

// Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        var win = window.open("https://google.com/")
    }
})

// TOOLS AND WHATNOT
// OTHERWISE KNOWN AS EXTRAS

function validURL(str) {
    const exp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const reg = new RegExp(exp);
    return !!reg.test(str);
};

function go() {
    var input = document.getElementById('inputTab').value;
    window.location.href = input;
}

function play() {

    var win = window.open()
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    win.document.title = "Redirecting...";

    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    win.document.body.appendChild(iframe);

    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                iframe.contentDocument.open();
                iframe.contentDocument.write(req.responseText);
                iframe.contentDocument.close();
            }
        }
    }

    req.open("GET", document.getElementById('inputTabP').value);
    req.send();
}

function kick() {
    var KICKASSVERSION = '2.0'
    var s = document.createElement("script")
    s.type = "text/javascript"
    document.body.appendChild(s)
    s.src = "https://cdn.jsdelivr.net/gh/michaelharper/Kick-Ass-App-WASD/kickass.js"
}

function eruda() {
    var s = document.createElement("script")
    s.src = "https://cdn.jsdelivr.net/npm/eruda"
    document.body.appendChild(s)
    s.onload = function () {
        eruda.init()
    }
}

function vaino() {
    document.body.innerHTML = "";
    var iframe = document.createElement("iframe")
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.style.position = "absolute";
    iframe.style.zIndex = "99999";
    iframe.src = link.url
    document.body.appendChild(iframe);
}

document.getElementById("inputTab").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        go()
    }
})

document.getElementById("inputTabP").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        play()
    }
})

const callableFunctions = {
    gnmath: () => {
        console.log('Function gnmath() executed.');

        try {
            fetch("https://cdn.jsdelivr.net/gh/gn-math/gn-math.github.io@main/singlefile.html?t=" + Date.now())
                .then(response => response.text())
                .then(html => {
                    document.documentElement.innerHTML = html;
                    document.documentElement.querySelectorAll('script').forEach(oldScript => {
                        const newScript = document.createElement('script');
                        if (oldScript.src) {
                            newScript.src = oldScript.src;
                        } else {
                            newScript.textContent = oldScript.textContent;
                        }
                        document.body.appendChild(newScript);
                    });
                });
        } catch (error) {
            console.error('error:', error);
        }
    },
};

const executeFunction = (value) => {
    const command = value.substring(1).trim();
    const functionNameMatch = command.match(/^([a-zA-Z_]\w*)\s*\(\s*\)$/);
    if (functionNameMatch && functionNameMatch[1]) {
        const funcName = functionNameMatch[1];

        if (callableFunctions[funcName] && typeof callableFunctions[funcName] === 'function') {
            console.log(`Executing safe function: ${funcName}`);
            callableFunctions[funcName]();
            return true; // Execution successful
        } else {
            console.error(`Error: Function "${funcName}" is not in the allow-list or is invalid.`);
        }
    } else {
        console.error(`Error: Invalid command format detected in value: ${value}`);
    }
    return false; // Execution failed or was not found
};

document.addEventListener('DOMContentLoaded', () => {
    const linkGroups = document.querySelectorAll('.link-group');

    linkGroups.forEach(group => {
        const h2 = group.querySelector('h2');
        const select = group.querySelector('select');
        const launchBtn = group.querySelector('.launch-btn');
        const newTabBtn = group.querySelector('.new-tab-btn');
        const copyBtn = group.querySelector('.copy-btn');

        if (h2 && select) {
            const linkCount = select.options.length - 1;
            if (h2.textContent && linkCount > 1) {
                h2.textContent = `${h2.textContent.trim()} (${linkCount})`;
            }
        }

        const getSelectedUrl = () => {
            return select.value;
        };

        if (launchBtn) {
            launchBtn.addEventListener('click', () => {
                const url = getSelectedUrl();
                if (url) {
                    if (url.startsWith('#')) {
                        executeFunction(url);
                    } else {
                        window.location.replace(url);
                    }
                } else {
                    alert('Please select a link first.');
                }
            });
        }

        if (newTabBtn) {
            newTabBtn.addEventListener('click', () => {
                const url = getSelectedUrl();
                if (url) {
                    if (url.startsWith('#')) {
                        executeFunction(url);
                    } else {
                        // Standard URL navigation
                        window.open(url, '_blank');
                    }
                } else {
                    alert('Please select a link first.');
                }
            });
        }

        if (copyBtn) {
            copyBtn.addEventListener('click', async () => {
                const url = getSelectedUrl();

                if (url) {
                    try {
                        await navigator.clipboard.writeText(url);
                        copyBtn.textContent = 'Copied!';
                        setTimeout(() => {
                            copyBtn.textContent = 'Copy Link';
                        }, 1500);
                    } catch (err) {
                        console.error('Failed to copy text: ', err);
                        alert('Failed to copy the link. Check console for details.');
                    }
                } else {
                    alert('Please select a link first.');
                }
            });
        }
    });
});
