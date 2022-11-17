// import { View, Text } from "react-native";
// import React from "react";
// import WebView from "react-native-webview";

// import { useAsyncStorage } from "@react-native-community/async-storage";

// export default function SocialWebview({ source, closeSocialModal }) {
//   const { setItem } = useAsyncStorage("f0c0c2c57a64ac01400e126c4f0c6377");

//   function LogInProgress(data) {
//     // access code는 url에 붙어 장황하게 날아온다.
//     // substringd으로 url에서 code=뒤를 substring하면 된다.
//     const exp = "code=";
//     const condition = data.indexOf(exp);
//     if (condition != -1) {
//       var request_code = data.substring(condition + exp.length);
//       // console.log("access code :: " + request_code);
//       // 토큰값 받기
//       requestToken(request_code);
//     }
//   }

//   const requestToken = async (request_code) => {
//     const returnValue = "none";
//     const request_token_url = "https://kauth.kakao.com/oauth/token";
//     axios({
//       method: "post",
//       url: request_token_url,
//       params: {
//         grant_type: "authorization_code",
//         client_id: "ic",
//         redirect_uri: "url",
//         code: request_code,
//       },
//     })
//       .then(function (response) {
//         returnValue = response.data.access_token;
//       })
//       .catch(function (error) {
//         console.log("error", error);
//       });
//   };

//   return (
//     // <View style={{ flex: 1 }}>
//     <WebView
//       originWhitelist={["*"]}
//       scalesPageToFit={false}
//       style={{ marginTop: 30 }}
//       source={{
//         uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=id&redirect_uri=${source}`,
//       }}
//       injectedJavaScript={runFirst}
//       javaScriptEnabled={true}
//       onMessage={(event) => {
//         LogInProgress(event.nativeEvent["url"]);
//       }}
//       // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
//     />
//     // </View>
//   );
// }
