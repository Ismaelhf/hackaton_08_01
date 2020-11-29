/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import React, {useRef, useState, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = React.useState(null);
  return (
    <>
      <View style={styles.bodyAll}>
        <View style={styles.section}>
          {/* Perfil */}
          <View style={styles.headProfile}>
            {/* Cabecera */}
            <View style={styles.contentProfile}>
              <View style={styles.viewImg}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>Elija una Opción</Text>
                      <View style={styles.btnsModal}>
                        <TouchableHighlight
                          style={{
                            ...styles.openButton,
                            backgroundColor: '#2196F3',
                          }}
                          onPress={() => {
                            setModalVisible(!modalVisible);
                            ImagePicker.launchCamera(
                              {
                                mediaType: 'photo',
                                includeBase64: false,
                                maxHeight: 200,
                                maxWidth: 200,
                              },
                              (response) => {
                                setResponse(response);
                              },
                            );
                          }}>
                          <Text style={styles.textStyle}>Camara</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                          style={{
                            ...styles.openButton,
                            backgroundColor: '#2196F3',
                          }}
                          onPress={() => {
                            setModalVisible(!modalVisible);
                            ImagePicker.launchImageLibrary(
                              {
                                mediaType: 'photo',
                                includeBase64: false,
                                maxHeight: 200,
                                maxWidth: 200,
                              },
                              (response) => {
                                setResponse(response);
                              },
                            );
                          }}>
                          <Text style={styles.textStyle}>Galeria</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                          style={{
                            ...styles.openButton,
                            backgroundColor: '#2196F3',
                          }}
                          onPress={() => {
                            setModalVisible(!modalVisible);
                          }}>
                          <Text style={styles.textStyle}>Cancelar</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  {response ? (
                    <Image
                      style={styles.imgPerfil}
                      source={{
                        // uri:
                        //   'data:image/jpeg;base64,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',
                        uri: response.uri,
                      }}
                    />
                  ) : (
                    <Image
                      style={styles.imgPerfil}
                      source={{
                        uri:
                          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFhUVFRgYFRgWFxcXFxUXFRcWFxcXFRgYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHyUtLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAgMEBQYABwj/xABDEAABAwEFBQQHBgUDAwUAAAABAAIRAwQFEiExBkFRYXEigZGhEzJCscHR8AcUUmJygiOSorLhM3TxFRZDJFNkw9L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQACAgEEAwEAAwEAAAAAAAAAAQIRAxIhMVETIkEyBDNhUv/aAAwDAQACEQMRAD8A1oCWAiAlgLyj1QAJYC4BKATA4BEBGEoBAAARhEBGEACEYRhGEACF0JULoQAmF0IuIGqqrxvxlPIZn60QNJvgtCo1a3U26u8FibftQ5xIbJ6Z/wCB0lU9a3VX6wOpJ8hEeaRaxnoNe/qTf+VDftTT3R5lYFxcdXnuga9FwIG938x+aCtCN7/3UzgE7T2mpHUHuMrz2eD3/wAzvmi0u/G7vh3GPWlOg0I9PoXtRfo+OuXnopmuYXlDazhz6GDp3gqwsF+VKZ7LyPynf3aHulG5LgejQhCqLp2hp1Ya+GPPgTy4HkrkhIhqhMIEJSCAEwgQlFAoAQQkkJwhCEANEIEJwhJISAaISS1PEJJCBjGFcnMKKAJACWAuASgFRJwCMIgIgIA4BKAXAIhAHBGFyKAOXIrkxHJFaqGAudoE4ViNqr89lvRo4k7v88EmVGNnX/tHuaTwAGZPID46LMua+pnUP7Qf7jv9yco0Yl7jLjrwHIcAEmtUUnQkNPcGiAoVW1Ju12sCSTACrH0q9b/SYQDvIz7huWkY9kTnWy3LA2xI++DiPFNWPZeoTNXF3zCn1dm49Q58Nyr07M7ydDTLQnm1k1VuVzRJbH5m5T1jeq77y+kYeMTeO+Pj9ap6U+BPI4/pUXrHpzCDuUayVWvAc0yCpQaoao2TsQHlu+R5rZbLX/iIo1TmfUcf7Tz4LJYUgEtORjSOX/CQmj1lBQrkt/p6LX+1o/8AUNfn3qcpMhKCUuQAhclIIASQkkJaEJDGyECE4QkkIENwuSoXIGPhKC4J2lRLtPFUlfBDdciAlBPiyHj5I/dHclfjl0T5I9jCKkCyHiEfuvNHjl0Hkj2R0U46m0e0uFPmEeOXQvJEQuTraBPBK+7neQjRLoeuPZT3/avR0SeOXzXmrZqVXOOjJaP1e2fHL9q3G29QNawDTMmVibrZFJs6kSeZOZPiVm1TZ0Yt0h2sVW2ypEqyqqpttHG5tPc49r9Izd5CE4oubpEG77Aa9QOd6s9kcfzdY0Xp9zXU0NAwgZZZLG3HUBtEH1abMRjdJhojeSNB81sqV5WkQW2M4d2J0GOMRKqScn/hEWoRv6yfabmYW8CszeN3vpkkTlvHyWns18B/ZqU3U3TGeYPQ/WqkYA7UZJSiOMnyzFUrU14wkQ+Mwd/RZO+7LBIjI+R+S1m1PoqZyBLuAGY71mbyfUewQA4cxDx1G9GNNOwytSjTM3ZrQ6i6Rp7Q5cVqbLaA8AhZmqzP603j3qTddcscWHTd0W81as5sUnF0zVNTdcZJFCtKNodkVgdRrdgq2VVnAtd3mQf7QtWsbsAO1V/SweblslLMpcnIIoIEBciuSGJQSkEAJKBCUhCAEQiiuTEWVhpCMRE55fNTWtlRbK7sDvSqlQxAXZBJJHHNtyZKwpJ6qsdZazv/AC4egB96q7Va7QysKTHNe1rJeXCIkw0AgjMw7wHFVZNGgfVgwckHOnmq2nbseRaWu4ZGf0nL3J6lWc0eqe+B7yiwolA8lGc7Dkcs1W3heFWcLCxveSfAZeap7deEETVcXDgMLdRumTqpbKUTXsrpNotQGpHeqGy2/Fq4565A+/NKq12TnmOZyPUIsKIG2faaw9R46LIXY6aTD+Ue5bC+i2pTcGgAgAiOW764LG3fliZwcSP0uMjwzH7VzZFuzvwP1Q+9RywZnfB03ACTHcCpNTJV1tqGHsBgupVADzLYHvKmJc+Cf9m5BFWuRic588hh0zOgB06ZaLQ23awMDjiBgw7A19QN/U4CAeXVRtgKxq2drnNYJAHYY1gIHYBcG6u7MTyVjeWzbalMs7WEvxw1xZDoLZBGY7LnDLKDorVanfBm9WlVQ1dF+srgEQ4GIImDOgzAI3ajpK0FreG08WkDRVezuzbLM0CAQ1pY1uZGFxJIM+tmTqhXpeksxcZMAhuLMwMpk55xKJUuCoNt0zL2m2Yy6pkAZOhJgToBmTkchwWctl9SSYdha7A5xZhwuGoLcUtPVai6qbKrSC0EuplhkR2XgFzctM+HBRXbJYWOYzstcZdmXSeMuz4796paFyS/I3sY20Vpdpi3y0drXWNHjPdn1Epu10y1zXdx3aZfQ3aKw2jsP3dpc0kYWmCMj2uyIPf4AqsusmpTc1xJdBqAkyS7MvmdZAJ6tWirTaOeVqellvYq6mVakiOJA8VT2QqfSl7msbmZ03knIDx9yya3OiL2PQtgqEUqlT8b4HRufvcR3LUKHdVj9DRZS/C3Pm45uPiSpayBhXIIpCAuXLkABciggAIJSCYAQRXIESrO+MvqU8ypqogT07/FdGKXw58sfpND1UU6Zwmrve4u54dG/wBIHep4d2TzHvSmdqkzmxvuG5bGJSPqgiT/AJ5d6QLYHDC4xwMx3E/FTK13gu+tVBtdxgiPSR3f5UspUMVLPhOmqobyaWumdQR9d6uqdmfRYWuq+l/DIgtHAHh1Wftt9UsWF+JrhmAR4ZiQpkXEl3Nd9orDE2GiYxOJE8QBEq2Oz9Y/+Rn9XyS9kr7oVababH9tsy1wwkmScp116rRrByZtpRnRs9UiPStE6wCfPJZfaG6X2aoH+sCNQPWG8R+IHMD5r0tMW2yMqsLHiQfEHcQdxSbbLi9J5i4ggEZg6FVVuBFQDkfKY9xWkvG4qtmfkMdJzsiBoT7unhwVdVsuJ88G592albGrdlp9n5/gFrYmlVqNz0IJDiDwzOvJbala6cdrsn8wjz0PcV599nNQYbQ0HMVQfFgbPeWuWnvGs6A1vrOOEfEnoAT3KnLS2EI6oosLZebC0hrobmHPzy4hvF31uhQau0FI0S4McAJHaY9phvBrgCe5S7M2lSYGFw036niSoF5Os7jLnSN0JNs0jj6TMtdd4txiozNlQmAMiOOTo3rT2i2NjIO/lI8zA81SVadKeyRPmn6drmnnq3I/A/XBS2XopmL+0N8sjSXDL590+Kz101cLgfwhh/qiP6oVnt3XxYBxcT3NH+VEp2Egu5NZ7qfzXVH+s8/L/dsSKzgw8ZOXPgt39n1wERaqo1zpg7/z9BoO88E1svsc2o4WmucTfYZx09flI037+C9AWEpbUjWgrkJXKAFLkmUUAFcguQAUFyKAAgilNZKaViG1ydFMrlekNjglsKbCUFKdOyWrVDzDBhP2MdjD+DLu3eSjNKNSoQx8ethy7tF1xlas5ZRp0MXjeFOnJc4ADeTHvWVvLaumMmS+Rlh+ZVHVsD69f+IS7Pfu6cE/abvbTqMEZaeP/CnVZSikI/6laKphjI/USfdCDbgc4l9Q4i7XgtRYrCAMh9fNTLVQhso0j1GTu2720qoxepVOEn8NTRp6HTrHFaGzXhWo1DRd24OU64TpB+tE1WoB4jip98UsP3esdZDHc8URPfHipcU0NSplnZrTiyIgwDE7ipCz1opF9qqRP8Oi0iOL3O//AB5qwsV4SO34/NZyhRpGVodvRxFN0awsZRpCKp1DWAd2FvvW1dVa4ZLNinjFYD2h7olQ00aRkYXY+3Chb6lJxgVpAO4ua4vb4hzvJeiWikXQQYOYB4TGfl5ryG/bI412FkhwIgjUOaYB6w1hXqmzl5enpAuye3s1BwcBr0Oo6qsi4ZWGdNxMVc183jZ7XVo1BSqPaZmqzESCQQWkEHCcJHKStF/3/azDTZLOcIIyDxrBnU/RV1e12sfUZVya4AjEdCD7L+W+dxVZUuxocXHBzh3ujor1m8f40Zq+TE3zftrtFVlIUaLC6BNNhBAGpnEYWndR9FRaC6XOiSd+Gc/NNNos9IXNA4YuPIclT7Y3v6OmYOcYW9f8LOT1tJIcorFe9mYvap94teFvqsAb3uIB9/kt7dt0te6uI9pjPDCT/asXsNYcTg92eJxcZ4Myn+Zx8F6jsuBhq1TkDUe6Tukw2e6Vpldeq+HDjuXu/pe3fQDKbWDcI8MvgpCCC5zYKEoLkwFLkmUZQIUuSZRQApcguJQAoCVKa2E1Z2708StoqkQxJCKBcuQURglBIBSgsgFhK3ymwlq4S0sicNSKm1XeG1RUaMjqqvaOjMEa6juWojcdFT3zZyOi3fGxgudyVcvaYCpV5UopuULZt3sq1vJnZKr4S+SjusYgBvmFZbTUpp0qY1NWlHQPZPlKi7NjtuJVx6LHUxnRgy6nIfEpLgb5KqwOBt9oZ/8AHpH+uqE0KeGo5u4nJN3YZvWp/tP/ALTHvVo6hirdyBDGHA2efvVPYey5vMuB78RH9oV9fQ9Vg35Kmr08Lw2PVLfOQscnJvjexirZZgy8AHAYHOBZ3jP3Bbd1wQ8V6GT8Ia9u6o0ZieYMkHmeKye0ucO9um7Xi2ezPiPNbe4reTTaTwCcaaCTcXaHKeF4h2R3gqrtdz0jJkeAWhtQp1BmIOecwRlKo7Zd7Ro92ZjMjiQpljfw2x/yEu0Zy9XMpNMHReZ3659apmM5wsbvzPvJhei3vTa3mcuecT748FlbHYy+riAzLhTp/rdkXftEnkYTxrTuTmnr2XBdXFYxQol24NwDmGSXn9zsX8qstorwFmu0Up/iVhmN8TOfg4Jy3WcF1Ogz1ZDeWFvacTyyA7yqKlSNvtjqhzo0zhZzDfa+PUqYe0m2Kb0xSRp9mLytFSz0xU7BGpObnD2QZ0MLT0Hk66qvuW531Did2aY9Ro4cTzPktZRsYGggLZY1XBg8rsqjRdrCalXhpj/KYdd4ecsuaiWHouOf/oq2ychmpLLFUPsx1yV7Z7IymMh1O8pUT0VRwdkyz9IpmXa87wEKl3vHAq9yCaqPBV+GJHmkZ5zSMil1KJDQ47yrR1IEyRospZ7++8WuvTb/AKdCGA7i8iXeEgLKWNRVm0cjk0i9Y6FxcmpXAqbNaFyuSMS5KwGwUoFISgswFtSpSAimApNWilibhPd8k4EVpCdbMznC90VN09mrHFX95t7CrLRShweO9W1szpg8l0R4OeXJS3Iw4iIzJWhfk2Bu9+9Vt00cIL/xGG9N5+uamVnZQiPApcmbudp/6m53GzEf1grU0qUOLiqG6af/AKwu/IR8fgtJaDARHgJclZUZjrNPDNV1+0Idi5jydPuV9d9HPEVWX8JcRxBj68VnkXqaY37GBv8AYBWa12lUEfuGbfIkLSXDTdSYA4Et3cR8wqTbyyn0TajfWa5jhzgkfLxWr2YripRBPASOCjHzRpk4smt9G7QjpodRxUS10GakjLPXhiPyViLO0nLTgfrknP8Ap1OZwt37gtqMLMLfFFgYS3MxkRmNANdN7j4Kpuuyhry7/wBsFgP53dqs4dB2QeYWh2vrdsADsszjiRoPGPBZ2wVCH0KO90vfPKHHxc5g/auZvdnXFeqYvaSqaVF72+vU/gUR+Z57ZHhH7Vo9mNnhRotaRrhB4mSAfiqL0X3q8LNS1ZRxP8GnCT3tPivQbc4U/Rc6jR4z8VrijsY5Zb0WFnpAZAaJT3fXNc10F3JAQMzu+ie8rc5xTae867lJYIUelJMp9zkxAqGTCUm6ZzlGq76hMBl5SShKEpDEVXwCeAJXnewpxMq1TGKrXqOMfqIA8AF6DU0I5FeYbGuLXVaefZqvyOvrFc+fg6f463ZvWo4UmgZCewrJHS9hpcnCxBOhWMSlNTYKcCzRIoIoBFACkZSUUDoMqXTbLANwUNSLIc4WuKVOjLLC1Y+0eG4IVjknCITVXRdRylddY/jyry1MmFUWAfxCeavC2Uo8DlyLothqyW2Vp9H6N5n/AFAOmIOHxWvIyWJ+0Wg51mdg9YFpHWUsi9R4/wBFLthammyjqAektz85VxshVwtYNz2+f17lhq1V1eyAHWAT1EE+4rR7CVi5rGHVsjw08oXLB+x1zj6G9fSIMjROB+WiLJ0RPwXWcRhNpKZdj4x56qhpNw2id/baOUuJ+DQtfe1mlx7/AJrH3lWh4eBnIcOsD4g+K4Hs2ejHdIuPs4o47RVqkZhkZ/mcI8mf1LR7ZVcLaEb7TRHi8BRtgKMMqPIgvcJ5GNO4YR3Ibc1MrN/vKH90rrx/g48v7NQfa6gfFJJzCU4+/wCCbJzWpiSqSNVybpldUKYh2ickh7vrJdQfATbz07kAJJSZQc5JLkFCDqvOKVE0bytFMzDoeJ34uHfK9GJXn32iVfu9rs1q9hwNN58x8VllVxNsEqka6zPyCkByqLFbWvALSCCMlPp1VyxOuSJK5JD0FRBHYEsFNgpQKgBcoykAooGLlGUlGUAKlO2Z0OHX3phKa6CCmnTsTVqi2qhRapUmq5Ray7mcKGbEO1KuWlVVm1VkT5oQMdDln9sKBdQfGoEjqMwr4FRrfSxMISkrVBF07PJLmpue9+XYIcI6HI57t/er7ZGhheTuJMeXxlTbJdUYmGAJzgCSOqu7vsAZoB0XNCD1Wdc8i00XFEyEKqFLJOwuo5CmtzAc+S82vuoMeAc55DmvWrVZQ4afFYq9tm3GqC3DqDDsmuG9pIXJmg7s68GRcMtdjXRQHA5jvyHfAVZt5Wzs3+6pnwlaGw0XMb2mNZlk1uYA6xmefILIbeOkUj+GqD4AraCqKRjN3Js9Cec+/wCSQ9Je766oNctTIfY9F7lHY/OE44piHKBzRrfUqPjgpx9TKfNADLikhyYrWiDH11KR6f60SsqiQ5yyX2o3d6awPIkupdtsctfKVonWpvEJD6jKjTTcQQ4EEcikB89XLtZXs0YTibwPwXpmz22lK0AZ4X72n4KVdWxtGjUIfZ2OAPYdAOXNZ77QtladB4r0BgBjE1uQB4iNFMscZf4aRyyjzubxt5CNVy8lo1quEdt3iisvE+zXzR6PZ5RBTYKIKwNaHQUoFMgpYKQDiMpAKMoAXKMpEoygZatdLQeSj1CnbMewPrimahXcnaRwPZs6jqrEnIKspOzViPVVITFYkXGU2ChiTERK9CDISqT1IKYqMhSVZJo5p5yi2Z2amHNNEjSFWm0iHAFLMBRq9bggZDtJA0+Kym01n9I0jhmtHVfqqu8WzPQqWUi6ZVltM/jYJ/c2ffCZZaIcWndoeIUKvVIsNOo3MsotcOZptBHm1N3k7EA5pMOAIIO45oYJfC5c/enqVbisvZ7c5mWo4cOisaFtDtD3b1EMqkaTwuJa1CoFpruGSe+8cVDtVZp014arRszSBZ6WRO8nMp4WQwSTkPPmUzZaDiZMhvPXwUi22xrRB04cUgKC23pTYSMJ6pqxXqKp7LDzJgBMVaXpnlxyEn/gKfRptaIaICxyZK2RvjxXuyULQ6IBIVZtNdrrTZ8LHHGHSZ9pTZRDlEcz+lywL4ZWz7MPwiQJ3rlqsSK086I8DJIKUCuXLmNxQKUCuXIAUCjK5cgQZRlcuQMsrGeyO/3pNUILl3Q/KOGf6Y1S1U+icoXLk0SwTGSFRy5cmAlj0orlyAOpszUppQXIQmMV6irqtVcuSGiM92aqb3rQ3uK5ck+ClyTLo7VhpTvY4eDnBU+zdYvsVHF6zW4D1pnBPkuXI+B9FEpMorl5x6ZIs9vc3XtDgVOF7t/DC5ctI5ZRMpYoyEOvedyrrQ8vOZy4LlyHmkwWGKCzLROBy5cszQUHIyguTEcuXLkCP//Z',
                        // uri: response.uri,
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <Text style={styles.textProfile}>Alisa</Text>
              <Text style={styles.textProfile}>22 want | 35 done</Text>
            </View>
          </View>
          <View style={styles.bodyProfile}>
            {/* Boddy */}
            <View>
              <View style={styles.btnAll}>
                <TouchableOpacity style={styles.btn}>
                  <View style={styles.btnIcon}>
                    <Image
                      style={styles.btImg}
                      source={require('./src/icons/order.png')}
                    />
                    <Text style={styles.btnText}>Order</Text>
                  </View>
                  <View style={styles.btnArrow}>
                    <Image source={require('./src/icons/right_arrow.png')} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.btnAll}>
                <TouchableOpacity style={styles.btn}>
                  <View style={styles.btnIcon}>
                    <Image
                      style={styles.btImg}
                      source={require('./src/icons/like.png')}
                    />
                    <Text style={styles.btnText}>Like</Text>
                  </View>
                  <View style={styles.btnArrow}>
                    <Image source={require('./src/icons/right_arrow.png')} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.btnAll}>
                <TouchableOpacity style={styles.btn}>
                  <View style={styles.btnIcon}>
                    <Image
                      style={styles.btImg}
                      source={require('./src/icons/comment.png')}
                    />
                    <Text style={styles.btnText}>Comment</Text>
                  </View>
                  <View style={styles.btnArrow}>
                    <Image source={require('./src/icons/right_arrow.png')} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.btnAll}>
                <TouchableOpacity style={styles.btn}>
                  <View style={styles.btnIcon}>
                    <Image
                      style={styles.btImg}
                      source={require('./src/icons/download.png')}
                    />
                    <Text style={styles.btnText}>Download</Text>
                  </View>
                  <View style={styles.btnArrow}>
                    <Image source={require('./src/icons/right_arrow.png')} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.btnAll}>
                <TouchableOpacity style={styles.btn}>
                  <View style={styles.btnIcon}>
                    <Image
                      style={styles.btImg}
                      source={require('./src/icons/edit.png')}
                    />
                    <Text style={styles.btnText}>Edit</Text>
                  </View>
                  <View style={styles.btnArrow}>
                    <Image source={require('./src/icons/right_arrow.png')} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sectionbar}>{/* tab menu inferior */}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bodyAll: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'black', //se comenta
    backgroundColor: '#F5F5F5', //decomentar
  },
  section: {
    flex: 12,
    // backgroundColor: '#585', //se comenta
  },
  sectionbar: {
    flex: 1,
    backgroundColor: '#586248', //se comenta
    backgroundColor: '#FFFFFF',
  },
  headProfile: {
    backgroundColor: '#FE6869',
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: '#F6D0D0',
    borderBottomWidth: 15,
  },
  bodyProfile: {
    flex: 4,
    // backgroundColor: '#fff', //se comenta
  },
  contentProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  imgPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#FCC1BF',
    borderWidth: 6,
    marginBottom: 6,
  },
  viewImg: {
    borderRadius: 75,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  textProfile: {
    color: '#fff',
    marginTop: 10,
    fontSize: 18,
  },
  btnAll: {
    marginBottom: 4,
  },
  btn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    paddingHorizontal: 15,
  },
  btnIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  btImg: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  btnArrow: {
    flex: 1,
    alignItems: 'flex-end',
  },
  btnText: {
    color: '#9A888D',
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  btnsModal: {
    flexDirection: 'row',
  },
});

export default App;
