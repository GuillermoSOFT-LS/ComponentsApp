import { useRef, useState } from 'react';
import { router } from 'expo-router';

import ThemedView from "@/Presentation/shared/ThemedView";
import ThemedButton from "@/Presentation/shared/ThemedButton";
import ThemeText from "@/Presentation/shared/ThemeText";

import {
    ImageSourcePropType,
    Image,
    useWindowDimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../../assets/images/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../../assets/images/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../../assets/images/slide-3.png'),
    },
];

const SlidesScreen = () => {
    const flatListRef = useRef<FlatList>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isScrollEnabled) {
            return;
        }

        const { contentOffset, layoutMeasurement } = event.nativeEvent;

        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

        setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

        if (currentIndex === items.length - 1) {
            setIsScrollEnabled(true);
        }
    };

    const scrollToSlide = (index: number) => {
        if (!flatListRef.current) return;

        flatListRef.current.scrollToIndex({
            index: index,
            animated: true,
        });
    };

    return (
        <ThemedView>
            <FlatList
                ref={flatListRef}
                data={items}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                scrollEnabled={isScrollEnabled}
                onScroll={onScroll}
            />

            {currentSlideIndex === items.length - 1 ? (
                <ThemedButton
                    className="absolute bottom-10 right-5 w-[150px]"
                    onPress={() => router.dismiss()}
                >
                    Finalizar
                </ThemedButton>
            ) : (
                <ThemedButton
                    className="absolute bottom-10 right-5 w-[150px]"
                    onPress={() => scrollToSlide(currentSlideIndex + 1)}
                >
                    Siguiente
                </ThemedButton>
            )}
        </ThemedView>
    );
};



export default SlidesScreen;

interface SlideItemProps {
    item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
    const { width } = useWindowDimensions();
    const { title, desc, img } = item;

    return (
        <ThemedView
            className="flex-1 rounded p-10 justify-center bg-red-500"
            style={{ width }}
        >
            <Image
                source={img}
                style={{
                    width: width * 0.7,
                    height: width * 0.7,
                    resizeMode: 'center',
                    alignSelf: 'center' ,
                }}

            />

            <ThemeText
                type="h1"
                className="text-light-primary dark:text-dark-primary"
            >
                {title}
            </ThemeText>

            <ThemeText className="mt-10">{desc}</ThemeText>
        </ThemedView>
    );
};