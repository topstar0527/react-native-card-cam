var messages = {
	purchase: "我的购买",
	going: "进行中",
	stock: "投入股本",
	earnings: "今日收益",
	yest_earnings: "昨日收益",
	revenue: "总收益",
	invitation: "My 我的邀请",
	inv_link: "邀请链接",
	copy: "复制",
	wallet_address: "我的钱包地址:",
	msg_success: "复制成功",
	msg_loading: "正在加载..",
	inv_per_num: "邀请人数",
	competitor: "竞赛人",
	inv_num: "邀请数",
	res_income: "剩余收益",
	per_income: "个人收益",
	team_income: "团队收益",
	total_income: "收益总额",
	gw: "官网",
	rule: "规则",
	about: "关于我们",
	voting: "社区投票",
	notice: "公告",
	earningsIndex: "收益详情",
	earningsToday: "今日收益",
	today: "今日收益",
	earningsY: "昨日收益",
	revenueAll: "总收益",
	assistant: "理财助手",
	purchase: "购买",
	profit: "收益",
	partner: "伙伴",
	investment: "投入",
	fund: "基金投入",
	securityFund: "安保基金",
	genesisFund: "创世基金",
	luckyFund: "幸运基金",
	equityValue: "权益值",
	applications: "娱乐应用",
	chess: "棋牌",
	gambling: "博彩",
	game: "游戏",
	comingSoon: "敬请期待...",
	ok: "好的",
	capital: "投入股本",
	redeem: "赎回",
	reinvest: "复投",
	evelopment: "应用努力开发中",
	exp_contract: "体验合约",
	buy_amount: "购买金额",
	upgrading: "升级是在同周期内增加投入金额",
	select_cycle: "选择购买周期",
	buy: "购买",
	confirm_upgrade: "确认升级",
	language: "Switching English"
}


//替换语言区
$(function(){
	let lg=localStorage.getItem('lang_type') || 'zh';
	$(".lang_type").each(function(index,item){
		//获取key
		key=$(this).data('key')
		$(this).text(messages[key] || "");
		if(lg!='zh'){
			$(this).addClass('logn_en');
		}else{
			$(this).removeClass('logn_en');
		}
	})
})