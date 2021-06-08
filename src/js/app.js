App = {
  web3Provider: null,
  contracts: {},
   Conference : null,

  init: async function() {
    // Load pets.
    $.getJSON('../pets.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    /*
     * Replace me...
     */
   if (window.ethereum) {
  App.web3Provider = window.ethereum;
  try {
    // Request account access
    await window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access")
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  App.web3Provider = window.web3.currentProvider;
}
// If no injected web3 instance is detected, fall back to Ganache
else {
  App.web3Provider = new Web3.providers.HttpProvider('http://47.245.29.212:7545');
}
web3 = new Web3(App.web3Provider);
    return App.initContract();
  },
//   initializeConference: function () {
//     Conference.setProvider(App.web3);
//     Conference.new({from: account, gas: 3141592}).then(
//         function (conf) {
//             myConferenceInstance = conf;
//             $("#confAddress").html(myConferenceInstance.address);
//             checkValues();
//         });
// },
  initContract: function() {
    $.getJSON('bank.json', function(data) {   //为何可直接加载Adoption.json文件呢，这是因为./build/contracts目录亿配置到服务器的环境中
      var AdoptionArtifact = data;

      App.contracts.Adoption = TruffleContract(AdoptionArtifact);
      App.contracts.Adoption.setProvider(App.web3Provider);
     var accounts=web3.eth.defaultAccount;
    });
    var accounts=web3.eth.defaultAccount;
     localStorage.setItem("token",accounts);
					$.ajax({
						url: '/user/check/user',
						data: {
              'address': accounts,
              'shareCode': App.getShareCode('code')
						},
						type: 'post', //HTTP请求类型
						success: function(d) {
							if (d.code == '0' || d.code == 0) {
							}
						},
					});
    return App.bindEvents();
  },
  getShareCode: function(name){
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]); return "";
  },
  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function(adopters, account) {
    /*
     * Replace me...
     */
  },
  sendCoin:  function(m,money,id) {
    // this.setStatus("Initiating transaction... (please wait)");
    // const { sendCoin } = App.contracts.Adoption.meta.methods;
    // sendCoin(receiver, amount).send({ from: App.contracts.Adoption.account });
    // this.setStatus("Transaction complete!");
    // this.refreshBalance();

    var adoptionInstance;
  App.contracts.Adoption.deployed().then(function(instance) {
    adoptionInstance = instance;
    // var bb = adoptionInstance.bid().call({from:web3.eth.defaultAccount,value:parseInt(money),gas:2000000});
    //  console.log(bb);
    // parseInt(money);
    // adoptionInstance.transfer({
    //   from: '0x3bc3AD1980105d6cFfFdDe20c012148EAAf7a610',
    //   value: web3.toWei(0.001),
    //   gas: 5000000
    // });a
      // adoptionInstance.transfer(web3.eth.defaultAccount,web3.toWei(0.001,"ether")).send; 
   //    adoptionInstance.withdraw(web3.eth.defaultAccount,web3.toWei(0.001,"ether"),{from: web3.eth.defaultAccount});     
  
      var amount=web3.toWei(parseFloat(money),"ether");
      return adoptionInstance.send(amount);  
 //var status=adoptionInstance.send(web3.toWei(0.001,'ether'));
//     adoptionInstance.transfer(web3.eth.defaultAccount,{from:web3.eth.defaultAccount,value:amount,gas:500000});     
   // adoptionInstance.transactionTo(web3.eth.defaultAccount,amount).send({
    //                         from: web3.eth.defaultAccount,
      //                       gas:5000000
        //                        });
  }).then(function(adopters) {
  //  for (i = 0; i < adopters.length; i++) {
   //   if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
   //     $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
   //   }
  //  }
     m.toast('购买成功');
      $ajax({
      url: '/cycle/buyCycle',
      data: {
        amount: moeny,
        cycleId: id,
        token: web3.eth.defaultAccount
      },
      type: 'post',
      success: function(d) {
        let tit = lg == 'zh' ? '购买成功' : 'Purchase success';
        if (d.code == '0' || d.code == 0) {
          m.toast(tit);

        } else {
        }
      }
    });
  console.log(adopters);
  
  }).catch(function(err) {
    m.toast('购买失败');
    console.log(err.message);
  });
  },
 tx:  function(m,money,id) {
    // this.setStatus("Initiating transaction... (please wait)");
    // const { sendCoin } = App.contracts.Adoption.meta.methods;
    // sendCoin(receiver, amount).send({ from: App.contracts.Adoption.account });
    // this.setStatus("Transaction complete!");
    // this.refreshBalance();

    var adoptionInstance;
  App.contracts.Adoption.deployed().then(function(instance) {
    adoptionInstance = instance;
  
        var amount=web3.toWei(money,"ether")
        return adoptionInstance.transactionTo(web3.eth.defaultAccount,amount).send({
              from: web3.eth.defaultAccount,
              gas:5000000
        });
        
  }).then(function(adopters) {
      m.toast('赎回成功');
  }).catch(function(err) {
      m.toast('赎回失败');
  });
  },


riseAmount:  function(m,money,id) {
    var adoptionInstance;
  App.contracts.Adoption.deployed().then(function(instance) {
    adoptionInstance = instance;
  
        var amount=web3.toWei(money,"ether")
        return adoptionInstance.send(amount);
        
  }).then(function(adopters) {
    $ajax({
      url: '/cycle/riseAmount',
      data: {
        amount: money,
        buyCycleId: id,
        token: web3.eth.defaultAccount
      },
      type: 'post',
      success: function(d) {
        if (d.code == '0' || d.code == 0) {
          let tit = lg == 'zh' ? '升级成功' : 'Upgrade success'
          m.toast(tit);
        }
      }
    });
      m.toast('升级成功');
  }).catch(function(err) {
      m.toast('升级失败');
  });
  },

















  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
