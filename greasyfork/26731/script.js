// ==UserScript==
// @name         Twitter Thumbnail-InNewWindow Auto Larger
// @description  推特-缩略图-在新窗口打开时-自动跳转大图
// @version      2.0.19052701
// @author       DanoR
// @namespace    http://weibo.com/zheung
// @grant        none
// @include      *://pbs.twimg.com/media/*
// ==/UserScript==

if(/name=/.test(location.href)) {
	if(!/name=orig/.test(location.href)) {
		location.href = location.href.replace(/name=\w+/, 'name=orig');
	}
}
else if(!/:orig$/.test(location.href)) {
	location.href += ':orig';
}