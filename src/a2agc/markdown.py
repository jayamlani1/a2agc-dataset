from typing import Any, List, Union, overload

import pathlib
from jinja2 import Environment, FileSystemLoader, select_autoescape

def _setupEnvironment(dirs: Union[str, List[str]]) -> Environment:
    return Environment(
        loader=FileSystemLoader(dirs),
        autoescape=select_autoescape(['html', 'xml'])
    )

@overload
def render(template: str, context: Any) -> str: ...
@overload
def render(template: str, dirs: Union[str, List[str]], context: Any) -> str: ...

def render(template, dirs, context = None):
    if context is None:
        assert dirs is not None
        context = dirs
        dirs = []

    path = pathlib.Path(template).resolve()
    template = path.name
    dirs = [str(path.parent), *dirs]
    env = _setupEnvironment(dirs)
    return env.get_template(template).render(context)

