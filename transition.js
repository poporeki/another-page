/// <reference path="../../Node.js/NodeSnippet/typings/globals/jquery/index.d.ts />
(function ($) {
    jQuery.extend({
        textTrans: function (_speed, _className) {
            var _speed = _speed;
            var _secWrap = _className;
            console.log(_secWrap.length);
            _secWrap.eq(0).siblings().css({
                'height': '1px',
                'top': '50vh',
                'width': '2px',
                'left': '50%'
            });
            _secWrap.hide();
            _secWrap.eq(0).fadeIn(1000);
            _secWrap.eq(0).addClass('active').siblings().removeClass('active');
            // 下一页
            $(".next-btn").click(function () {
                aniMate($(this));
            });
            // 上一页
            $(".prev-btn").click(function () {
                aniMate($(this));
            });

            function aniMate(btnName) {
                switch (btnName.attr("class")) {/*判断按钮名称*/
                    case "next-btn":
                        var _findIdx = _secWrap.index($('.active'));
                        var _thisWrapIdx = _findIdx;
                        var _nextWrapIdx = _findIdx + 1;
                        break;
                    case "prev-btn":
                        var _findIdx = _secWrap.index($('.active'));
                        var _thisWrapIdx = _findIdx;
                        var _nextWrapIdx = _findIdx - 1;
                        break;
                }

                if (_nextWrapIdx < 0 || _nextWrapIdx > _secWrap.length - 1) {
                    return console.log('yes'), alert('没了');
                }
                console.log(_nextWrapIdx);
                _secWrap.eq(_thisWrapIdx).animate({
                    'height': '1px',
                    'top': '50vh'
                }, _speed).animate({
                    'width': '2px',
                    'left': '50%'
                }, _speed * 2).fadeOut(200, function () {
                    _secWrap.eq(_nextWrapIdx).addClass('active').siblings().removeClass('active');
                    _secWrap.eq(_nextWrapIdx).fadeIn(200);
                    _secWrap.eq(_nextWrapIdx).animate({
                        'width': '100vw',
                        'left': '0'
                    }, _speed * 2).animate({
                        'height': '100vh',
                        'top': '0'
                    }, _speed);
                });
            }
        }
    });
})(jQuery)
