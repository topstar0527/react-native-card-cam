var messages = {
	purchase: "My purchase",
	going: "ongoing",
	stock: "Capital stock invested",
	earnings: "Today's earnings",
	yest_earnings: "Yesterday's earnings",
	revenue: "Total revenue",
	invitation: "My invitation",
	inv_link: "Invitation link",
	copy: "copy",
	wallet_address: "My wallet address:",
	msg_success: "copy success",
	msg_loading: "loading..",
	inv_per_num: "Number of invitations",
	competitor: "Competitor",
	inv_num: "Invitation number",
	res_income: "Residual income",
	per_income: "Personal income",
	team_income: "Team income",
	total_income: "Total income",
	gw: "Official website",
	rule: "rule",
	about: "About us",
	voting: "Community voting",
	notice: "Notice",
	earningsIndex: "Details of earnings",
	earningsToday: "Today's earnings",
	today:'Today',
	earningsY: "Yesterday's earnings",
	revenueAll: "Total revenue",
	assistant: "Financial Assistant",
	purchase: "purchase",
	profit: "profit",
	investment: "investment",
	partner: "partner",
	fund: "Fund input",
	securityFund: "Security Fund",
	genesisFund: "Genesis Fund",
	luckyFund: "Lucky Fund",
	equityValue: "Equity value",
	applications: "Entertainment applications",
	chess: "Chess and card",
	gambling: "Gambling",
	game: "Game",
	comingSoon: "Coming soon",
	ok: "OK",
	capital: "Equity",
	redeem: "Redeem",
	reinvest: "Reinvest",
	evelopment: "Application under development",
	exp_contract: "Experience",
	buy_amount: "Purchase amount",
	upgrading: "Upgrading is to increase investment amount in the same period",
	select_cycle: "Select purchase cycle",
	buy: "buy",
	confirm_upgrade: "Confirm upgrade",
	language: "切换中文"
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