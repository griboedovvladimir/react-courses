export function dataParser(response, id) {
    let data = response.split(' class="news-tidings__item news-tidings__item_1of3 news-tidings__item_condensed "');
    data.pop();
    data.shift();

    return data.reduce((cnt, el) => {
        let img = el.split(`<div class="news-tidings__image news-helpers_hide_mobile-small" style="background-image: url(`)[1]
            .split(`);"></div>`)[0];
        let link = `https://${id}.onliner.by` + el.split(`<a href="`)[1]
            .split(`" class="news-tidings__stub"></a>`)[0];
        let title = el.split(`<span class="news-helpers_hide_mobile-small">`)[1]
            .split(`</span`)[0];
        let discription = el.split(`<div class="news-tidings__speech news-helpers_hide_mobile-small">`)[1]
            .split(`</div>`)[0].trim();

        cnt.push({img, link, title, discription});

        return cnt;
    }, []);

}