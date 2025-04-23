import { shadowStyle } from "@/styles/shadows";
import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import { interpolate, useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width - 40;

export const AboutImages = ({ images }: { images: string[] }) => {
	const ref = React.useRef<ICarouselInstance>(null);
	const progress = useSharedValue<number>(0);

	const onPressPagination = (index: number) => {
		ref.current?.scrollTo({
			/**
			 * Calculate the difference between the current index and the target index
			 * to ensure that the carousel scrolls to the nearest index
			 */
			count: index - progress.value,
			animated: true,
		});
	};

	const animationStyle = React.useCallback((value: number) => {
		'worklet';

		const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
		const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
		const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

		return {
			transform: [{ scale }],
			zIndex,
			opacity,
		};
	}, []);


	return (
		<View style={{ ...shadowStyle("primary").medium, alignSelf: "center" }}>
			<Carousel
				ref={ref}
				width={width}
				height={width / 2}
				data={images}
				onProgressChange={progress}
				autoPlay
				autoPlayInterval={4000}
				renderItem={({ item }) => (
					<Image
						source={item}
						style={{ width, height: width / 2, borderRadius: 12 }}
					/>
				)}
			/>

			<Pagination.Basic
				progress={progress}
				data={images}
				dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
				containerStyle={{ gap: 5, marginTop: 15 }}
				onPress={onPressPagination}
			/>
		</View>
	);
}